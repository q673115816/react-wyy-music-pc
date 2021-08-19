import React, { memo, lazy } from 'react'
const Lrc = lazy(() => import(
  /* webpackChunkName: "Lrc" */
  '@/pages/Lrc'));
const DialogLogin = lazy(() => import(
  /* webpackChunkName: "Components_dialog_Login" */
  '@/components/Dialog/Login'));
const DialogShare = lazy(() => import(
  /* webpackChunkName: "Components_dialog_Share" */
  '@/components/Dialog/Share'));
const DialogShareWX = lazy(() => import(
  /* webpackChunkName: "Components_dialog_ShareWX" */
  '@/components/Dialog/ShareWX'));
const DialogCreatePlaylist = lazy(() => import(
  /* webpackChunkName: "Components_dialog_CreatePlaylist" */
  '@/components/Dialog/CreatePlaylist'));
const DialogUnSubscription = lazy(() => import(
  /* webpackChunkName: "Components_dialog_UnSubscription" */
  '@/components/Dialog/UnSubscription'));
const Playlist = lazy(() => import(
  /* webpackChunkName: "Components_Playlist" */
  '@/components/Playlist'));
const Letter = lazy(() => import(
  /* webpackChunkName: "Components_Playlist" */
  '@/components/Letter'));
const Toast = lazy(() => import(
  /* webpackChunkName: "Components_Toast" */
  '@/components/Toast'));
const Contextmenu = lazy(() => import(
  /* webpackChunkName: "Components_Contextmenu" */
  '@/components/Contextmenu'));
const HeaderSearch = lazy(() => import(
  /* webpackChunkName: "Components_HeaderSearch" */
  '@/components/Search/Search'));

export default memo(() => (
  <>
    <DialogShare />
    <DialogShareWX />

    <DialogCreatePlaylist />
    <DialogUnSubscription />

    <Lrc />
    <Playlist />
    <Letter />
    <HeaderSearch />
    <Contextmenu />
    <Toast />
    <DialogLogin />
  </>
))
