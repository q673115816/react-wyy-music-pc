import React, { memo } from "react";
import DialogLogin from "@/components/Dialog/Login";
import DialogShare from "@/components/Dialog/Share";
import DialogShareWX from "@/components/Dialog/ShareWX";
import DialogCreatePlaylist from "@/components/Dialog/CreatePlaylist";
import DialogUnSubscription from "@/components/Dialog/UnSubscription";
import Playlist from "@/components/Playlist";
import Letter from "@/components/Letter";
import Toast from "@/components/Toast";
import Contextmenu from "@/components/Contextmenu";
import HeaderSearch from "@/components/Search";

const Help = () => (
  <>
    <DialogShare />
    <DialogShareWX />

    <DialogCreatePlaylist />
    <DialogUnSubscription />

    <Playlist />
    <Letter />
    <HeaderSearch />
    <Contextmenu />
    <Toast />
    <DialogLogin />
  </>
);

export default memo(Help);
