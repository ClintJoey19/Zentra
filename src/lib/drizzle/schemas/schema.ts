import { account } from "./account.schema";
import { invitation } from "./invitation.schema";
import { member } from "./member.schema";
import { organization } from "./organization.schema";
import { session } from "./session.schema";
import { user } from "./user.schema";
import { verification } from "./verification";

export const schema = {
  user,
  account,
  session,
  verification,
  organization,
  member,
  invitation,
};
