import * as Permissions from "expo-permissions";

export default async function ALERT_PERMISION() {
  const { status, expires, permissions } = await Permissions.askAsync(
    Permissions.CAMERA
  );
}
