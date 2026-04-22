interface Props {
  name: string;
  role: string;
  avatarUrl: string;
}

export default function ProfileCard({ name, role, avatarUrl }: Props) {
  return (
    <div data-testid="profile-card" className="border border-gray-200 rounded-lg p-6 max-w-sm">
      <img
        src={avatarUrl}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h2 data-testid="profile-name" className="text-xl font-bold text-center text-gray-900">
        {name}
      </h2>
      <p data-testid="profile-role" className="text-gray-500 text-center mt-1">
        {role}
      </p>
    </div>
  );
}
