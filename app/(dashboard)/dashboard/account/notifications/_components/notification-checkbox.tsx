'use client';

import {
  disableNotification,
  enableNotification,
} from '@/actions/notification-settings.action';
import { Checkbox } from '@/components/ui/checkbox';
import { useTransition } from 'react';
import { toast } from 'sonner';

export default function NotificationCheckbox({
  setting,
}: {
  setting: NotificationSettingPreference;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="px-2 py-3.5">
      <Checkbox
        disabled={isPending}
        checked={setting.enabled}
        onChange={() =>
          startTransition(async () => {
            let response;
            if (setting.enabled)
              response = await disableNotification(setting.type.id);
            else response = await enableNotification(setting.type.id);
            if (response.status === 'success') toast.success(response.message);
          })
        }
      >
        {setting.type.label}
      </Checkbox>
    </div>
  );
}
