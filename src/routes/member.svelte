<script>
  import { fly } from 'svelte/transition'

  let w

  import member_data from "data/member.csv"

  let member_for = member_data.filter(d => d.person_type == 1)
  let member_against = member_data.filter(d => d.person_type == 2)
</script>

<style>
  .columns {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
  }
  .column {
    flex: 50%;
  }
  @media only screen and (max-width: 700px) {
    .columns {
      flex-flow: column wrap;
    }
    .column {
      flex: 100%;
    }
    .column:nth-of-type(2) {
      margin-top: 1em;
      padding-top: 1em;
      border-top: 3px solid #333;
    }
    .name, .desc {
      width: 100%;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
  ul li {
    margin: 1em 0;
  }
  ul li img {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    padding: 0.5em 0;
    border-radius: 50%;
  }
  ul li div {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 30px - 1em);
    margin-left: 0.5em;
  }

  .name {
    font-weight: bold;
  }
  .desc {
    margin-top: 0.5em;
  }
  .first, .desc {
    opacity: 0.65;
  }
  .first {
    margin-top: 0;
  }
</style>

<!-- <h1>สมาชิก</h1> -->

<div bind:clientWidth={w} in:fly="{{ x: w, duration: 1000, delay: 500 }}" out:fly="{{ x: w, duration: 500 }}">

  <p class="first">
    จากตัวอย่างเหตุการณ์ทางการเมืองที่เกิดขึ้นในช่วง พ.ศ. 2557 ถึง พ.ศ. 2560 สะท้อนให้เห็นว่าจากระยะเวลาเกือบ 3 ปี มีความเคลื่อนไหวที่เกี่ยวข้องกับรัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2560 เกิดขึ้นมากมาย โดยแบ่งตัวอย่างผู้ที่เกี่ยวข้องกับการเกิดขึ้นของรัฐธรรมนูญ 2560 ได้ 2 ประเภทหลัก ดังนี้
  </p>

  <div class="columns">
    <div class="column">
      <h2 class="left">
        สนับสนุน ({member_for.length})
      </h2>

      <ul>
        {#each member_for as { person_no, person_name, person_type, description }}
          <li>
            <img src="images/person_{`${person_no}`.padStart(2, "0")}.jpg" alt="icon" />
            <div>
              <div class="name">{person_name}</div>
              <div class="desc">{description}</div>
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <div class="column">
      <div style="text-align: right;">
        <h2 class="right">
          ต่อต้าน ({member_against.length})
        </h2>
      </div>

      <ul>
        {#each member_against as { person_no, person_name, person_type, description }}
          <li>
            <img src="images/person_{`${person_no}`.padStart(2, "0")}.jpg" alt="icon" />
            <div>
              <div class="name">{person_name}</div>
              <div class="desc">{description}</div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>

</div>