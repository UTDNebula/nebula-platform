import { auth } from "@/auth";
import { SignOut } from "@/components/SignOut";
import { headers } from "next/headers";
import Image from "next/image";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) return <div>please login</div>;
  return (
    <div className="card card-xl bg-base-300 m-5">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="avatar">
            <div>
              {session.user.image ? (
                <div className="avatar">
                  <div className="w-24">
                    <Image
                      src={session.user.image}
                      alt="user profile"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
              ) : (
                <div className="avatar avatar-placeholder">
                  <div className="w-24">
                    <span>{session.user.name[0]}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="card-title">{session.user.name}</div>
          </div>
        </div>

        <div>settings info</div>
      </div>
      <div className="card-actions">
        <SignOut />
      </div>
    </div>
  );
}
