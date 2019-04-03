const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();



var prefix = "*";
var cats = ["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","http://www.catgifpage.com/gifs/318.gif","data:image/jpeg;base64,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","data:image/jpeg;base64,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","https://i.gifer.com/XvRn.gif","https://i.pinimg.com/originals/e8/04/5d/e8045dfe7d492fe17b488be37ac3565e.gif","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibZSmTYI48w48_5aU3EEDsffj1rS5J4P_HV7BSrsBRwPSfdmi","data:image/jpeg;base64,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","https://media.tenor.com/images/bb33cc1eaafa266ac1092ecff7c1c85d/tenor.gif","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nu11EYXGsZWVl5xbuDmRMGTH10JVHJ4yRTVoNmlJB8DyURvZVA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsrg87d6qZvapWtasUM5kWwiGPZDBdJZMFqusNtfPYCxZzYPm","https://media2.giphy.com/media/C5PQo0MSWT1QY/giphy.gif","http://i.imgur.com/0yO8N.gif","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRzNqvHN85tk8W-V8et5W6UcnoK7DpVli5PmlxZJJc18TDlaq","http://24.media.tumblr.com/04719a6ab56420e0ccd730a4890f76cd/tumblr_mr97fml3hc1sdqvq4o1_400.gif","https://media1.tenor.com/images/5440fd4c60ff1c009b6f907dfcb3f463/tenor.gif?itemid=3419985","https://media1.tenor.com/images/9dabdd649948aee67ab76babb72ab067/tenor.gif?itemid=4448808","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jQDiIMRbnH5v7howsjApfG4wgDGzVpSRxl8HC1RVy63Z_-emAA","https://1.bp.blogspot.com/-r4ETNOUgr74/WQotYJViqnI/AAAAAAABwbI/1Y00uyV-PugCOmDroxq8o-CKvgNZTcjFQCLcB/s1600/funny-cat-gif-257-03.gif","http://38.media.tumblr.com/6ae1b270754a889fd58379eae7e60a16/tumblr_nim3bl49Je1u7gnm9o1_250.gif","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFq9HHGEIdQXcnEm2O1_D6wXvTENkM7fk1fLO0S_sBXHYoH_qXnw"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'doxcats')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});







client.on('message', message => {
  var prefix = "*";
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "522137634294726677") return;
  
  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 



if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/verskaa");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 

  
   

});
client.on('ready', () => {
  console.log(`Welcome ${client.user.tag}! hi Dox`);
});

  


client.on("message", message => {
 if (message.content === "*help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
        ***__Administrator orders__***
**
『:no_entry: : ${prefix}bc1 | Send a brodcast to all members with embed』
『:no_entry:  ${prefix}bc2 | Send a brodcast to all members without embed』
『:no_entry:  ${prefix}bc3 | Send a brodcast to online members only』
『:no_entry:  ${prefix}clear | Mute user in chat』    


       ***__General orders__***
**
『:robot: ${prefix}draw | يكرر كلامك في صوره』
『:robot: ${prefix}embed | يكرر كلامك بمبيد』
『:robot: ${prefix}animal | يعطيك صور حيوانات』
『:robot: ${prefix}avatar | يعرض صورتك او صوره شخص』

**

       ***__Fun orders__***

『:smiley_cat:  ${prefix}doxcats | Gives you pictures cats』

        ***__Bot orders__***
**
『:robot: ${prefix}ping | يعرض لك سرعه اتصال البوت』
『:robot: ${prefix}bot | معلومات عن البوت』
**


        ***__Games orders__***
 **       
『:robot: ${prefix}لعبه صراحه | صراحه』
『:robot: ${prefix}لعبه مريم | مريم』
『:robot: ${prefix}لعبه خواطر | خواطر』
『:robot: ${prefix}love | يعطيك شعر عن الحب 』
『:robot: ${prefix}يخيرك بين شي وشي | لو خيروك』
『:robot: ${prefix}يعطيك عقاب و لازم تنفذه | عقاب』
『:robot: ${prefix}cuttweet | لعبه اسئله  』
        ***__Fun orders__***

『:smiley_cat:  ${prefix}doxcats | Gives you pictures cats』

 

`)


message.author.sendEmbed(embed)

}
}); 


client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc1') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » Massage : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

	
client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc2') {
if(!message.channel.guild) return message.reply('**:x: Sorry but this is only for servers **');         
if (!args[1]) {
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .addField('# | Massage ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.sendMessage(args)
  });
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **You do not have permission to post here**");
  const AziRo = new Discord.RichEmbed()   
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc3")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : Number of receiving members`); 
 message.delete(); 
};     
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//العاب//


const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith('*صراحه')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});


const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",
  
]


 client.on('message', message => {
   if (message.content.startsWith("*عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('WOlF BOT' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[38ab] Send By: ' + message.author.username)
    }
});


  var prefix = "*";
var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});



 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("*cuttweet")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("*خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});




const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


 client.on('message', message => {
   if (message.content.startsWith("*love")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Diso Bot' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});



console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
  console.log(`im redey`);
});
const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
]
 client.on('message', message => {
 if (message.content.startsWith('*مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});


//اوامر عامه//








    

  

  
    var prefix = "*";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

   




client.on('message', message => {
    var prefix = "*"
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});






  
var prefix = "*";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});




var prefix = "*";

client.on('message',function(message) {
    let muteRole = message.guild.roles.find(r => r.name === "Muted");
    let muteId = message.mentions.users.first();
    let messageArray = message.content.split(" ");
    let muteReason = messageArray[3];
    let Swearing = '1h';
    let Advertising = '4h';
    let Spam = '2h';
   if(message.content.startsWith(prefix + "mute")) {
       if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
       if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**- You don't have the needed permissions!**");
       if(!muteId) return message.channel.send("**- Mention someone!**");
       if(muteId === message.author) return message.channel.send('**- You cannot mute yourself!**');
       if(muteId === client.user) return message.channel.send('**- You cannot mute me!**');
       message.guild.channels.forEach((channel, id) => {
      message.channel.overwritePermissions(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.channel.send(`
    \`\`\`ml
" قم بأختيار رقم السبب "
1 : السب و الشتم
2 : النشر
3 : السبام
\`\`\`
__امامك 20 ثانية للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 20000,
    errors: ['time'],
  })
  .then((collected) => {
      message.guild.member(muteId).addRole(muteRole)
      .then(() => { setTimeout(() => {
           message.guild.member(muteId).removeRole(muteRole);
       }, mmss(Swearing));
       message.channel.send(`**تم!, تم اعطاء ميوت لـ${muteId} بسبب السب و الشم**`);
      });
    });

message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 20000,
    errors: ['time'],
  })
  .then((collected) => {
      message.guild.member(muteId).addRole(muteRole)
      .then(() => { setTimeout(() => {
           message.guild.member(muteId).removeRole(muteRole);
       }, mmss(Advertising));
       message.channel.send(`**تم اعطاء ميوت لـ${muteId} بسبب النشر**`);
      });
    });
message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 20000,
    errors: ['time'],
  })
  .then((collected) => {
      message.guild.member(muteId).addRole(muteRole)
      .then(() => { setTimeout(() => {
           message.guild.member(muteId).removeRole(muteRole);
       }, mmss(Spam));
       message.channel.send(`**تم اعطاء ميوت لـ${muteId} بسبب السبام**`);
      });
    });
   });
   }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.login(process.env.BOT_TOKEN);


