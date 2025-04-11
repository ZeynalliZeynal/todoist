import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  type ColumnSort,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Badge from '@/components/ui/badge';
import {
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Cross,
} from 'vercel-geist-icons';
import SubmitButton from '@/components/submit-button';
import {
  approveMembershipInvitation,
  rejectMembershipInvitation,
} from '@/actions/member.action';
import Link from 'next/link';

export default function MembershipTable({
  memberships,
}: {
  memberships: Membership[];
}) {
  console.log(memberships);
  const [sorting, setSorting] = React.useState<ColumnSort[]>([]);

  const getStatusBadge = (status: MembershipStatus) => {
    switch (status) {
      case 'pending':
        return (
          <Badge variant="amber-subtle" outline>
            <Clock className="mr-1 h-3 w-3" />
            Pending
          </Badge>
        );
      case 'approved':
        return (
          <Badge variant="green-subtle" outline>
            <Check className="mr-1 h-3 w-3" />
            Approved
          </Badge>
        );
      case 'rejected':
        return (
          <Badge variant="red-subtle" outline>
            <Cross className="mr-1 h-3 w-3" />
            Rejected
          </Badge>
        );
    }
  };

  const columnHelper = createColumnHelper<Membership>();

  const columns = React.useMemo(
    () => [
      columnHelper.accessor((row) => row.entity.name, {
        id: 'entityName',
        header: 'Entity',
        cell: (info) => <span className="font-medium">{info.getValue()}</span>,
      }),
      columnHelper.accessor((row) => row.invitedBy, {
        id: 'invitedBy',
        header: 'Invited By',
        cell: (info) => (
          <Link href="#" className="hover:underline">
            {info.getValue()?.name || '-'}
          </Link>
        ),
      }),
      columnHelper.accessor((row) => row.entityType, {
        id: 'entityType',
        header: 'Type',
        cell: (info) => <Badge variant="teal-subtle">{info.getValue()}</Badge>,
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => getStatusBadge(info.getValue()),
      }),
      columnHelper.accessor('invited', {
        header: 'Invitation Type',
        cell: (info) =>
          info.getValue() ? (
            <Badge variant="purple-subtle">Invited</Badge>
          ) : (
            <Badge variant="blue-subtle">Requested</Badge>
          ),
      }),
      columnHelper.accessor('id', {
        id: 'actions',
        header: () => <div className="text-right">Actions</div>,
        enableSorting: false,
        cell: (info) => {
          const membership = memberships.find((m) => m.id === info.getValue());

          if (!membership) return null;

          return (
            <div>
              {membership.status === 'pending' ? (
                membership.invited ? (
                  <div className="flex justify-end gap-2">
                    <form
                      action={async (formData) => {
                        await rejectMembershipInvitation(
                          formData.get('id')?.toString() || '',
                        );
                      }}
                    >
                      <input
                        type="hidden"
                        name="id"
                        defaultValue={info.row.original.entity.id}
                      />
                      <SubmitButton
                        variant="destructive"
                        prefix={<Cross fontSize={14} />}
                        outline
                        size="sm"
                      >
                        Reject
                      </SubmitButton>
                    </form>
                    <form
                      action={async (formData) => {
                        await approveMembershipInvitation(
                          formData.get('id')?.toString() || '',
                        );
                      }}
                    >
                      <input
                        type="hidden"
                        name="id"
                        defaultValue={info.row.original.entity.id}
                      />
                      <SubmitButton
                        variant="success"
                        prefix={<Check fontSize={14} />}
                        outline
                        size="sm"
                      >
                        Approve
                      </SubmitButton>
                    </form>
                  </div>
                ) : (
                  <Badge variant="gray">Awaiting Response</Badge>
                )
              ) : (
                <Badge variant="gray-subtle">No action yet</Badge>
              )}
            </div>
          );
        },
      }),
    ],
    [columnHelper, memberships],
  );

  const table = useReactTable({
    data: memberships,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="border bg-background-200 rounded-lg">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={header.id === 'actions' ? 'text-right w-48' : ''}
                >
                  {header.isPlaceholder ? null : (
                    <div
                      className={`flex items-center ${
                        header.column.getCanSort()
                          ? 'cursor-pointer select-none'
                          : ''
                      }`}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: (
                          <ChevronUp
                            className="ml-1 animate-in fade-in-0 zoom-in-0"
                            fontSize={14}
                          />
                        ),
                        desc: (
                          <ChevronDown
                            className="ml-1 animate-in fade-in-0 zoom-in-0"
                            fontSize={14}
                          />
                        ),
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No memberships found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
