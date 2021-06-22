    path= window.location.pathname;
    var path=window.location.pathname.split("/");
    var page=path[path.length-1];

    var botname=[]; var botname_sub=[]; var team_lead=[];
    var element = document.body;
    var x = document.getElementsByTagName("section");
    var y = document.getElementsByTagName("footer");
    var z=document.getElementsByTagName("h2");
    var btn=document.getElementsByTagName("button");
    var blk=document.getElementsByClassName("block_team");
    var blk2=document.getElementsByClassName("block_quote");
    var evn = document.getElementsByClassName("evn");
    var cont=document.getElementsByClassName("d-block");

    team_lead[0]=document.getElementById("team_head1");
    team_lead[1]=document.getElementById("team_head2");
    team_lead[2]=document.getElementById("team_head3");

    botname[0]=document.getElementById("bot0");
    botname[1]=document.getElementById("bot1");
    botname[2]=document.getElementById("bot2");
    botname[3]=document.getElementById("bot3");

    botname_sub[0]=document.getElementById("bot0-sub");
    botname_sub[1]=document.getElementById("bot1-sub");
    botname_sub[2]=document.getElementById("bot2-sub");
    botname_sub[3]=document.getElementById("bot3-sub");

if(localStorage["dark"]==1){
    change2dark();
}
else {
    btn[0].style.backgroundColor='black';
    btn[0].innerHTML='DarkMode .';
    btn[0].style.color='rgb(139, 138, 138)';
}

function darkTheme(){

    if(localStorage["dark"]!=1){
        localStorage["dark"]=1;
        change2dark();
    }
    else {
        localStorage["dark"]=0;
        change2light();
    }
}

function change2dark(){
    document.body.style.backgroundColor='#343a40';
    var x = document.getElementsByTagName("section");
    x[1].classList.replace("slanted","slanted-dark");
    y[0].classList.replace("site-footer","site-footer-dark");
    y[0].classList.replace("slanted-footer","slanted-footer-dark");

    for( i=0; i<z.length; i++){
        z[i].classList.replace("section-title","section-title-dark");
    }
    btn[0].style.backgroundColor='white';
    btn[0].innerHTML='LightMode .';
    btn[0].style.color='black';
    element.style.color='#97a2ad';

    if(page=='index.html'){
        for(i=0; i<4; i++){
            botname[i].style.color="#007bff";
            botname_sub[i].style.color="white";
        }
    }

    if(page=='team.html'){
        team_lead[0].classList.replace("lead-team","lead-team-dark");
        team_lead[1].classList.replace("lead-team-2","lead-team-2-dark");
        team_lead[2].classList.replace("lead-team-3","lead-team-3-dark");
        for(i=0; i<3; i++){
            botname[i].style.color="#007bff";
        }
    }

    if(page=='events.html'){
        for(i=0; i<3; i++)
        evn[i].classList.replace("event-title","event-title-dark");
    }

    if(page=='contact.html'){
        for(i=1; i<4; i++){
            cont[i].classList.replace("block__86547","block__86547_dark");
        }
    }

    for(i=0; i<blk2.length; i++){
        blk2[i].classList.replace("block__87154","block__87154_dark");
        blk2[i].getElementsByTagName("h3")[0].style.color='orangered';
    }

    if(page=='team.html' || page=='index.html'){
        for(j=0; j<blk.length; j++){
            blk[j].classList.replace("block__16443","block__16443_dark");
        }
    }
}

function change2light(){
    element.style.backgroundColor='#fff';
        x[1].classList.replace("slanted-dark","slanted");
        y[0].classList.replace("site-footer-dark","site-footer");
        y[0].classList.replace("slanted-footer-dark","slanted-footer");

        for( i=0; i<z.length; i++){
            z[i].classList.replace("section-title-dark","section-title");
        }
        btn[0].style.backgroundColor='black';
        btn[0].innerHTML='DarkMode .';
        btn[0].style.color='rgb(139, 138, 138)';

        if(page=='index.html'){
            for(i=0; i<4; i++){
                botname[i].style.color="black";
                botname_sub[i].style.color="rgb(49, 46, 46)";
            }
        }

        for(i=0; i<blk2.length; i++){
            blk2[i].classList.replace("block__87154_dark","block__87154");
            blk2[i].getElementsByTagName("h3")[0].style.color='black';
        }

        if(page=='team.html'){
            team_lead[0].classList.replace("lead-team-dark","lead-team");
            team_lead[1].classList.replace("lead-team-2-dark","lead-team-2");
            team_lead[2].classList.replace("lead-team-3-dark","lead-team-3");
            for(i=0; i<3; i++){
                botname[i].style.color="black";
            }
        }

        if(page=='contact.html'){
            for(i=1; i<4; i++){
                cont[i].classList.replace("block__86547_dark","block__86547");
            }
        }

        if(page=='events.html'){
            for(i=0; i<3; i++)
            evn[i].classList.replace("event-title-dark","event-title");
        }

        if(page=='team.html' || page=='index.html'){
            for(j=0; j<blk.length; j++){
                blk[j].classList.replace("block__16443_dark","block__16443");
            }
        }
}
