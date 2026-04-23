interface Props {
  name: string;
  role: string;
  avatarUrl: string;
}

export default function ProfileCard({ name, role, avatarUrl }: Props) {
  return (
    <div data-testid="profile-card" className="border border-zinc-700 rounded-lg p-6 max-w-sm">
      <img
        src={avatarUrl}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h2 data-testid="profile-name" className="text-xl font-bold text-center text-zinc-100">
        {name}
      </h2>
      <p data-testid="profile-role" className="text-zinc-400 text-center mt-1">
        {role}
      </p>
    </div>
  );
}
