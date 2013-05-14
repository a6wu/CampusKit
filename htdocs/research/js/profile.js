var ucsf=ucsf||{};ucsf.ctsiProfile={renderProfile:function(e){"use strict";if(e.hasOwnProperty("Profiles")&&e.Profiles instanceof Array&&e.Profiles.length>0){var t,n,i,r,a,c,o,l,s,u,d,m,h,p,f,g,P,b,y,w,v,E,A,L=e.Profiles[0],C=document.getElementById("ctsi-menu"),_=document.getElementById("ctsi-header");if(L.hasOwnProperty("Name")){_.innerHTML=L.Name;if(L.hasOwnProperty("PhotoURL")){n=document.createElement("img");n.setAttribute("src","http://src.sencha.io/80/80/"+L.PhotoURL);n.setAttribute("alt","");n.setAttribute("style","border-top-right-radius:0;border-bottom-left-radius:.5em;float:left");i=_.clientHeight;_.setAttribute("style","height:52px;padding-top:20px");C.insertBefore(n,_)}}if(L.hasOwnProperty("Narrative")&&"string"==typeof L.Narrative){t=document.createElement("ol");C.appendChild(t);r=document.createElement("li");a=document.createElement("a");a.setAttribute("href","#");a.setAttribute("onclick","ucsf.ctsiProfile.toggleNarrative(); return false;");c=document.createElement("span");c.setAttribute("class","smallprint");c.setAttribute("id","ctsi-narrative");o=L.Narrative.substring(0,L.Narrative.substring(0,200).lastIndexOf(" "));c.innerHTML=o+"...";document.getElementById("ctsi-narrative-hidden").innerHTML=L.Narrative;a.appendChild(c);r.appendChild(a);t.appendChild(r);n.setAttribute("style","border-top-right-radius:0;float:left")}if(L.hasOwnProperty("Keywords")&&L.Keywords.length>0){l=L.Keywords;s=document.createElement("ol");u=l.length>5?5:l.length;for(d=0;u>d;d+=1){m=document.createElement("li");m.innerHTML=l[d];s.appendChild(m)}h=document.getElementById("ctsi-keywords");h.innerHTML='<h1 class="content-first light">Research Interests</h1>';h.appendChild(s)}if(L.hasOwnProperty("Publications")&&L.Publications.length>0){p=L.Publications;f=document.createElement("ol");g=p.length>5?5:p.length;for(P=0;g>P;P+=1)if(p[P].hasOwnProperty("PublicationTitle")){b=document.createElement("li");y=document.createElement("span");y.setAttribute("class","smallprint");y.innerHTML=p[P].PublicationTitle;if(p[P].hasOwnProperty("PublicationSource")&&p[P].PublicationSource[0].hasOwnProperty("PublicationSourceURL")&&p[P].PublicationSource[0].PublicationSourceURL.length>0){w=document.createElement("a");w.setAttribute("href",p[P].PublicationSource[0].PublicationSourceURL);w.setAttribute("rel","external")}else w=document.createElement("p");w.appendChild(y);b.appendChild(w);f.appendChild(b)}v=document.getElementById("ctsi-publications");v.innerHTML='<h1 class="content-first light">Recent Publications</h1>';v.appendChild(f)}if(L.hasOwnProperty("ProfilesURL")){E=document.createElement("li");A=document.createElement("a");A.innerHTML="Full Research Profile";A.setAttribute("rel","external");A.setAttribute("href",L.ProfilesURL);document.getElementById("ctsi-full-profile");E.appendChild(A);document.getElementById("ctsi-full-profile").appendChild(E)}}},toggleNarrative:function(){"use strict";var e=document.getElementById("ctsi-narrative").innerHTML;document.getElementById("ctsi-narrative").innerHTML=document.getElementById("ctsi-narrative-hidden").innerHTML;document.getElementById("ctsi-narrative-hidden").innerHTML=e}};window.location.search&&(window.onload=function(){"use strict";var e,t,n=decodeURIComponent(window.location.search),i=n.match(/[&?]fno=([\w.@]+)/);if(null!==i){e=i[1];t=document.createElement("script");t.src="http://profiles.ucsf.edu/CustomAPI/v1/JSONProfile.aspx?FNO="+e+"&callback=ucsf.ctsiProfile.renderProfile&publications=full&mobile=on";document.body.appendChild(t)}});