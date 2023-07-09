import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  toggled: boolean;
  onToggle: (toggled: boolean) => void;
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
};
export default function ToggleButton({ toggled, onToggle, onIcon, offIcon }: Props) {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <button
      onClick={() => {
        if (!user) {
          redirect('/auth/signin');
        }
        onToggle(!toggled);
      }}
    >
      {toggled ? onIcon : offIcon}
    </button>
  );
}
