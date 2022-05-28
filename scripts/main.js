Events.on(ClientLoadEvent, () => {
  Core.atlas.getRegions().each(r => r.set(Core.atlas.find("alphaaaa")));
  
  Core.bundle.debug("Alpha-Chan");
  Vars.content.each(c => {
    if (!(c instanceof UnlockableContent)) return;
    c.localizedName = "Alpha-Chan";
    c.description = "Alpha-Chan";
    c.details = "Alpha-Chan";
  });
});
