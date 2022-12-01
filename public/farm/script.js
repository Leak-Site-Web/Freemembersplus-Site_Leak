let guildCards = document.getElementById("guild-cards");

let loader = createLoader();
axios("/api/farm/list", {
    method: "GET"
}).then(({ data: res }) => {
    loader.remove();
    if(res.success) {
        const { data: guilds } = res;
        guilds.map((guild) => {
            let guildCard = document.createElement("div");
            guildCard.classList.add("guildCard");
            guildCard.onclick = () => {
                let loader = createLoader();
                axios(`/auth/me/guilds/join?guild_id=${guild.id}`, {
                    method: "GET"
                }).then(({ data: res }) => {
                    loader.remove();
                    if(res.success) {
                        window.location.reload();
                    } else {
                        console.error(res);
                    };
                }).catch((err) => {
                    console.error(err);
                });
            };
        
                let head = document.createElement("div");
                head.classList.add("head");
    
                    let icon = document.createElement("div");
                    icon.classList.add("icon");
    
                    if(guild.icon) {
                        let img = document.createElement("img");
                        img.src = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}`;
                        icon.appendChild(img);
                    } else {
                        let span = document.createElement("span");
                        span.innerHTML = guild.nameAcronym.slice(0, 4);
                        icon.appendChild(span);
                    };
    
                    head.appendChild(icon);
                
                guildCard.appendChild(head);

                let infos = document.createElement("div");
                infos.classList.add("infos");
    
                    let name = document.createElement("span");
                    name.classList.add("name");
                    name.innerHTML = guild.name;
                    infos.appendChild(name);
    
                    /*let description = document.createElement("p");
                    description.classList.add("description");
                    //description.innerHTML = guild.description;
                    description.innerHTML = "Eodem tempore Serenianus ex duce, cuius ignavia populatam in Phoenice Celsen ante rettulimus, pulsatae maiestatis imperii reus iure postulatus ac lege, incertum qua potuit suffragatione absolvi, aperte convictus familiarem suum cum pileo, quo caput operiebat, incantato vetitis artibus ad templum misisse fatidicum, quaeritatum expresse an ei firmum portenderetur imperium, ut cupiebat, et cunctum.";
                    infos.appendChild(description);*/
                
                guildCard.appendChild(infos);
    
                /*let links = document.createElement("div");
                links.classList.add("links");
    
                    let invite = document.createElement("a");
                    invite.href = `/auth/@me/guilds/join?id=${guild.id}`;
                    invite.innerHTML = "Rejoindre";
                    links.appendChild(invite);
                
                guildCard.appendChild(links);*/
            
            guildCards.appendChild(guildCard);
        });
    } else {
        const { error } = res;
        alertError(error, () => {
            window.location.href = "/auth/login";
        });
    };
}).catch((err) => {
    console.error(err);
});