<script>
  let w
  const source_links = [
    "http://ethesisarchive.library.tu.ac.th/thesis/2017/TU_2017_5803011310_7591_6090.pdf",
    "http://www.ratchakitcha.soc.go.th",
    "https://www.matichon.co.th",
    "https://www.voicetv.co.th",
    "https://prachatai.com/",
    "https://thaipublica.org",
    "https://news.thaipbs.or.th",
    "https://www.thairath.co.th",
    "https://mgronline.com",
    "https://www.posttoday.com",
    "https://www.naewna.com",
    "https://www.komchadluek.net",
    "https://www.sanook.com/news",
    "https://www.ect.go.th",
    "https://www.constitutionalcourt.or.th",
    "https://ptp.or.th/",
    "https://www.facebook.com/DemocratPartyTH",
    "https://ilaw.or.th",
    "https://www.facebook.com/thammasatsu",
    "https://www.facebook.com/Y.Shinawatra",
    "https://www.facebook.com/suthep.fb"
  ]
  const download_link = "https://docs.google.com/spreadsheets/d/1DdmWZ-Hn8pFyRESWy_cfrappUMFT5jVyd3OA6x-C_tU/edit#gid=0"
</script>

<style>
  .table {
    margin: 1em 0;
  }
  .cell {
    width: 49%;
    max-width: 300px;
    display: inline-block;
    vertical-align: top;
  }

  .first {
    margin-top: 0;
  }

  .centered {
    text-align: center;
  }

  .button {
    background-color: var(--color0);
    border-radius: 1em;
    padding: 0.5em 0.75em;
    display: inline-block;
    cursor: pointer;
  }
  .button:hover {
    text-decoration: underline;
  }
</style>

<!-- <h1>เกี่ยวกับโครงการ</h1> -->

<p class="first" bind:clientWidth={w}>
  รัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2560 ถูกวิพากษ์วิจารณ์อย่างมากในหลายประเด็น ไม่ว่าจะเป็นที่มาของผู้ร่างรัฐธรรมนูญที่ไม่เป็นประชาธิปไตย การสร้างบทบัญญัติที่วางกระบวนการสืบทอดอำนาจให้กับ คสช. คณะรัฐประหารซึ่งยึดอำนาจการปกครองจากรัฐบาลที่มาจากการเลือกตั้ง การปิดกั้นการแสดงความคิดเห็นเกี่ยวกับการออกเสียงประชามติร่างรัฐธรรมนูญ รวมถึงการกำหนดประเด็นคำถามในการออกเสียงประชามติที่ไม่ชัดเจน ฯลฯ
</p>

<p>
  ก่อนที่รัฐธรรมนูญฉบับนี้จะกำเนิดขึ้นมาได้ ก็มีเหตุการณ์ต่าง ๆ เกิดขึ้นมากมาย ซึ่งมีความเกี่ยวข้องเชื่อมโยงกัน ทั้งจากฝั่งเหตุการณ์ที่สร้างผลสนับสนุน คสช. ในการสร้างรัฐธรรมนูญเพื่อการสืบทอดอำนาจ และฝั่งเหตุการณ์ที่สร้างผลต่อต้าน คสช. ไม่ให้สามารถใช้รัฐธรรมนูญเพื่อสืบทอดอำนาจต่อได้ ซึ่งเหตุการณ์ทั้งสองฝั่งล้วนมีบุคคล กลุ่มบุคคล และองค์กรที่เกี่ยวข้องอย่างหลากหลาย ทั้งจากภาครัฐ ภาคการเมือง และภาคประชาชน
</p>

<p>
  ELECT จะพาทุกคนไปดู Timeline ตั้งแต่เกิดการทำรัฐประหารเมื่อ พ.ศ. 2557 จนถึงการประกาศใช้รัฐธรรมนูญฉบับปัจจุบันเมื่อ พ.ศ. 2560 ผ่านตัวอย่าง “70 เหตุการณ์” เพื่อแสดงให้เห็นว่าก่อนที่จะเกิดเป็นรัฐธรรมนูญ 2560 มีเหตุการณ์อะไรเกิดขึ้นบ้าง รวมถึงผู้ที่มีความเกี่ยวข้องในเรื่องนี้ ทั้งจากฝ่ายสนับสนุนและฝ่ายไม่สนับสนุน คสช. เป็นใคร และทำอะไรที่ส่งผลต่อการเกิดรัฐธรรมนูญ 2560 อันเป็นเครื่องมือสืบทอดอำนาจของ คสช. บ้าง
</p>

<h2 class="left">
  ที่มาของข้อมูล
</h2>

<ul>
  {#each source_links as link}
    <li><a href={link} target="_blank">{link.length > w/8 ? (link.substring(0, w/8) + '…') : link}</a></li>
  {/each}
</ul>

<h2 class="left">
  อาสาสมัครร่วมพัฒนา
</h2>

<div class="table">
  <div class="cell">👩‍💻 เขียนโปรแกรม</div>
  <div class="cell"><a href="https://github.com/puripant">puripant</a></div>

  <div class="cell">👩‍🎨 ออกแบบ</div>
  <div class="cell">น้ำใส ศุภวงศ์</div>

  <div class="cell">🕵️‍♀️ รวบรวมข้อมูล</div>
  <div class="cell">สิทธิกานต์ ธีระวัฒนชัย</div>

  <div class="cell">👩‍🍳 บรรณาธิการ</div>
  <div class="cell">ธนิสรา เรืองเดช</div>

  <div class="cell">🧙‍♀️ ประสานงานและอื่น ๆ</div>
  <div class="cell">
    <a href="https://punchup.world">Punch Up</a>,<br />
    <a href="https://www.boonmeelab.com">Boonmee Lab</a>
  </div>
</div>

<h2 class="left">
  ร่วมพัฒนาโครงการ
</h2>

<p>
  ตรวจสอบ ติดตาม และร่วมพัฒนาโปรเจ็กท์ได้ทาง Github โค้ดบนเว็บไซต์ทั้งหมดถูกเปิดเผยแบบสาธารณะเพื่อความโปร่งใสในการดำเนินการและพัฒนา และร่วมเป็นส่วนหนึ่งในการพัฒนา Civil Tech ในประเทศไทย หากคุณต้องการแบ่งปันทักษะด้านพัฒนาระบบ ออกแบบ รวบรวมข้อมูล หรือแบ่งปันข้อมูล รวมทั้งความช่วยเหลือด้านอื่น ๆ สามารถติดต่อได้ที่ contact [at] elect.in.th
</p>

<h2 class="left">
  นโยบายการนำข้อมูลไปใช้ต่อ
</h2>

<p>
  ELECT มีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
</p>
<p>
  หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง หรือมีข้อเสนอแนะใด ๆ สามารถติดต่อได้ที่ contact [at] elect.in.th
</p>
<div class="centered">
  <a href={download_link} target="_blank">
    <div class="button">ตารางข้อมูล</div>
  </a>
</div>