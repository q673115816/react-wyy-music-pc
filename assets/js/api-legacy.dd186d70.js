System.register(["./index-legacy.34d3513c.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.G}],execute:function(){var n=e.injectEndpoints({endpoints:function(t){return{getPlaylistDetail:t.query({query:function(t){return{url:"playlist/detail",method:"POST",body:t}}}),getCommentPlaylist:t.query({query:function(t){return{url:"comment/playlist",method:"POST",body:t}}})}}}),u=n.useGetPlaylistDetailQuery,r=n.useGetCommentPlaylistQuery;t({u:u,a:r})}}}));
