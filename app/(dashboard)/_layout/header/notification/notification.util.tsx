import { NotificationTypeEnum } from '@/constants/notification.enum';
import { dashboardRoute } from '@/routes';

export function generateNotificationName({
  value,
  type,
}: {
  value: string | string[];
  type: string;
}) {
  if (!value || !type)
    throw new Error('No notification value or type provided');

  if (typeof value === 'string') {
    switch (type) {
      case NotificationTypeEnum.TASK_COMPLETED:
        return (
          <p>
            The task <strong>{value}</strong> has been completed
          </p>
        );
      case NotificationTypeEnum.TASK_OVERDUE:
        return (
          <p>
            The task <strong>{value}</strong> is overdue
          </p>
        );
      case NotificationTypeEnum.TASK_DELETED:
        return (
          <p>
            The task <strong>{value}</strong> has been deleted
          </p>
        );
      case NotificationTypeEnum.TASK_CLEARED:
        return (
          <p>
            Tasks have been cleared from the project <strong>{value}</strong>
          </p>
        );
      case NotificationTypeEnum.TASK_UPDATED:
        return (
          <p>
            The task <strong>{value}</strong> has been updated
          </p>
        );
      case NotificationTypeEnum.TASK_DUE_SOON:
        return (
          <p>
            The task <strong>{value}</strong> is due soon
          </p>
        );

      case NotificationTypeEnum.PROJECT_DELETED:
        return (
          <p>
            The project <strong>{value}</strong> has been deleted
          </p>
        );
      case NotificationTypeEnum.PROJECT_UPDATED:
        return (
          <p>
            The project <strong>{value}</strong> has been updated
          </p>
        );

      default:
        return 'Not a proper name provided';
    }
  } else if (typeof value === 'object')
    switch (type) {
      case NotificationTypeEnum.TASK_ASSIGNED:
        return (
          <p>
            The task <strong>{value[0]}</strong> has been assigned to the user{' '}
            <strong>{value[1]}</strong>
          </p>
        );
    }
}

export function generateNotificationLink({
  value,
  type,
}: {
  value: string;
  type: string;
}) {
  if (!value || !type)
    throw new Error('No notification value or type provided');

  switch (type) {
    case NotificationTypeEnum.TASK_COMPLETED:
      return `${dashboardRoute}/${value}`;
    case NotificationTypeEnum.TASK_OVERDUE:
      return `${dashboardRoute}/${value}`;
    case NotificationTypeEnum.TASK_DELETED:
      return `${dashboardRoute}/${value}`;
    case NotificationTypeEnum.TASK_CLEARED:
      return `${dashboardRoute}/${value}`;
    case NotificationTypeEnum.TASK_UPDATED:
      return `${dashboardRoute}/${value}`;
    case NotificationTypeEnum.TASK_DUE_SOON:
      return `${dashboardRoute}/${value}`;

    case NotificationTypeEnum.PROJECT_DELETED:
      return `${dashboardRoute}/${value}`;
    case NotificationTypeEnum.PROJECT_UPDATED:
      return `${dashboardRoute}/${value}`;
    default:
      return dashboardRoute;
  }
}
