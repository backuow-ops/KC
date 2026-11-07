// =====================================================================
//  KC's Museum - settings. Yahi file edit karni hai, index.html nahi.
//  Photos aur captions SIRF yahin se aayenge. Kuch likhoge nahi to frames khali rahenge.
// =====================================================================
window.MUSEUM_CONFIG = {

  // ---------- 15 PHOTOS + CAPTIONS (tum khud) ----------
  // Museum me 15 photo frames hain (Slot 1 se Slot 15, kamra-kamra karke, 3 har kamre me)
  // aur 1 video frame (aakhri kamre ki deewar pe, bench ke saamne).
  //
  // Photo lagane ke 2 step:
  //   1) photo ko GitHub ke  photos/  folder me upload karo (e.g. photos/01.jpg)
  //   2) neeche ek line likho. title aur text dono optional hain.
  //      Us photo ke paas jaoge to ye text apne aap screen pe aayega.
  //      Nayi line ke liye \n likho.
  //      slot: N likhoge to usi number wale frame me lagegi; na likho to agle khali frame me.
  //
  // Example (// hata ke use karo):
  //   { slot: 1, file: 'photos/01.jpg', title: 'Mera title', text: 'Meri pehli line\nDusri line' },
  //   { slot: 2, file: 'photos/02.jpg', text: 'Sirf text, title nahi' },
  //   { file: 'photos/03.jpg' },                    // bina caption
  photos: [
  ],

  // ---------- 1 VIDEO (jab dono "Sit together" dabate ho tab chalta hai) ----------
  // Video ko  video/  folder me daalo, phir yahan likho (// hata do):
  // video: { file: 'video/our-video.mp4', title: 'Video ka title', text: 'Video ke paas ka text' },
  // Video chalte time background music apne aap ruk jata hai, uthne pe wapas chalu.

  autoPhotos: true,   // true: photos/ folder ki jo photo upar likhi nahi, wo bina caption ke khali frame me
                      //       video/ folder ka pehla video bhi apne aap video frame me
  githubRepo: '',     // custom domain ho to 'username/repo' likho

  // ---------- OPTIONAL TEXT (khali = kuch nahi dikhega) ----------
  subtitle: 'Hemant ki taraf se, yaadon ka ek ghar',   // pehli screen ke neeche ki line
  rooms: [],          // 6 kamron ke naam, e.g. ['Room 1','Room 2',...]. Khali = koi naam nahi

  // ---------- BACKGROUND MUSIC (kitne bhi gaane) ----------
  // Tareeka 1 (aasaan): saare gaane  music/  folder me upload karo (mp3 / m4a).
  //   Sab apne aap playlist me aa jayenge, file name ke order me (01-..., 02-... likho to order pakka).
  // Tareeka 2: yahan gaane ke naam likho (title dikhane ke liye). // hata ke use karo:
  //   music: [
  //     { title: 'Pehla gaana',  file: 'music/01-first.mp3' },
  //     { title: 'Doosra gaana', file: 'music/02-second.mp3' }
  //   ],
  // Ek khatam hote hi agla chalta hai, aakhri ke baad pehla. Bar me "Music" button se
  // play/pause, next/previous, volume. Phone se apna gaana bhi add kar sakte ho.
  autoMusic: true,    // true: music/ folder ke gaane apne aap
  music: [],

  // ---------- ONLINE (dono log same rakho) ----------
  // Secret room naam. Hemant aur KC dono ke liye SAME, aur kuch unique likho.
  room: 'kc-hemant-museum-CHANGE-ME-4821',

  // ---------- PHONE PE NOTIFICATION (optional, free) ----------
  // ntfy app me subscribe karo:  <naam>-hem (Hemant)   <naam>-kc (KC)
  ntfyTopic: '',
  notifyWhenJoins: { kc: true, hem: false }   // kc: true => KC aaye to Hemant ko push
};
