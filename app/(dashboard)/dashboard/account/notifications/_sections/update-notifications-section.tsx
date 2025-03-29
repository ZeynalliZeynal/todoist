'use client';

import NotificationCheckbox from '../_components/notification-checkbox';

export default function UpdateNotificationsSection({
  settings,
}: {
  settings: NotificationSetting;
}) {
  const kinds = Object.keys(settings).map((setting) => setting);

  return (
    <div className="space-y-8">
      {kinds.length > 0
        ? kinds.map((kind) => (
            <section key={kind}>
              <header className="bg-background-200 px-4 py-3 border rounded-t-md">
                <p className="p-1 capitalize text-xl font-medium">
                  {kind} notifications
                </p>
              </header>
              <div className="p-4 bg-background-100 border divide-y border-t-0 rounded-b-md">
                {settings[kind].map((setting) => (
                  <NotificationCheckbox setting={setting} key={setting._id} />
                ))}
              </div>
            </section>
          ))
        : 'No setting found.'}
    </div>
  );
}
