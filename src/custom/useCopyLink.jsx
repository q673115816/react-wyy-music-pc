export default async (ShareUrl, fnToast = () => null) => {
  const data = new DataTransfer();
  data.items.add('text/plain', ShareUrl);
  await navigator.clipboard.writeText(ShareUrl);
  // dispatch(setDialogReset());
  fnToast();
  // alert('链接复制成功');
};
