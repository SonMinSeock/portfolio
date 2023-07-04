import Nav from "./components/UI/Nav";
import profileImg from "./img/profile.jpg";
import classes from "./App.module.css";
import aboutMeImg from "./img/about_me.png";
import sparkFirstImg from "./img/spark_instar_first.png";
import sparkSecondImg from "./img/spark_instar_second.png";
import mateSecondImg from "./img/mate_second.png";
import dmImg from "./img/dm_first.png";
import studyImg from "./img/studygroup.jpeg";
import React, { Fragment } from "react";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <section id="profile" className={classes.profile}>
        <div>
          <h3>손민석의 포트폴리오</h3>
          <img src={profileImg} />
          <p>
            안녕하세요{" "}
            <span className={classes.bold}>프론트엔드 신입 개발 지원자</span>{" "}
            손민석 입니다.
            <br />
            포트폴리오 페이지에 오신걸 환영합니다.
          </p>
        </div>
      </section>
      <section id="aboutme" className={classes.aboutme}>
        <h3>ABOUT ME</h3>
        <div className={classes["desktop__aboutme"]}>
          <div>
            <div className={classes.aboutme__img}>
              <img src={aboutMeImg} />
              <img src={studyImg} />
            </div>

            <p>
              안녕하세요, 함께 나아가고 배움에 두렵지 않은 프론트엔드 개발
              지원자 손민석 입니다.
            </p>
            <p>
              경운대학교에서 항공소프트웨어공학 캄퓨터 전공을 통해 배우면서
              서버프로그래밍 수업을 통해 HTML, CSS, JavaScript를 접하게
              되었습니다.
              <br />
              그후 프론트엔드 개발 직무를 알게 되었습니다. 좀더 웹 분야에 대해
              관심이 생겼습니다. 학부에서 웹 개발에 대해 관심을 가진 후임들이
              많아 지금 까지 배웠던 웹 개발 지식들을 후임에게 가르키는 계기가
              되어 학부 웹 개발 스터디 그룹을 운영했습니다.
              <br />
              최근에는 개발블로그, 노션을 작성해 공유 하고 있습니다.
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className={classes.skills}>
        <div>
          <h3>SKILLS</h3>
          <span className={classes["skills__title"]}>Web Skills</span>
          <div>
            <div className={classes["skills__print"]}>
              <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566995514/noticon/jufppyr8htislboas4ve.png" />
              <span>HTML</span>
            </div>
            <div className={classes["skills__print"]}>
              <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912109/noticon/puksfce6wca36hes1vom.png" />
              <span>CSS</span>
            </div>
            <div className={classes["skills__print"]}>
              <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570946287/noticon/qgdiv5ctkcneujidjuv1.png" />
              <span>JavaScript</span>
            </div>
            <div className={classes["skills__print"]}>
              <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png" />
              <span>React</span>
            </div>
            <div className={classes["skills__print"]}>
              <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557264/noticon/eyhvbmh82nhdoydl4j2a.png" />
              <span>NodeJS</span>
            </div>
          </div>
          <span className={classes["skills__title"]}>Database</span>
          <div>
            <div className={classes["skills__print"]}>
              <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913759/noticon/rewwujgq5wuw2qohwta9.png" />
              <span>MongoDB</span>
            </div>
            <div className={classes["skills__print"]}>
              <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913958/noticon/uoqjdixts4lwsgtsa1pd.png" />
              <span>Firebase</span>
            </div>
          </div>
        </div>
      </section>
      <section id="works" className={classes.works}>
        <h3>WORKS</h3>
        <div>
          <div className={classes["work__img"]}>
            <img src={sparkFirstImg} />
            <img src={sparkSecondImg} />
          </div>
          <span>
            <a href="https://web-spark-app-4c7jj2blhejxep3.sel4.cloudtype.app/">
              프로젝트 이름 : 관심사 기반 친구 찾기 서비스!(클릭 해보세요)
            </a>
          </span>
          <br />
          <span>
            제작 기간 : `23.05.02 ~ 05.12{" "}
            <a
              href="https://github.com/SonMinSeock/spark_app"
              className={classes["git-icon"]}
            >
              <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972215/noticon/vgvbhxae6jrvqpcnu0vb.png" />
            </a>
          </span>
        </div>
        <div>
          <div className={classes["work__img"]}>
            <img src={mateSecondImg} />
          </div>
          <span>프로젝트 이름 : MATE 카풀 서비스!</span>
          <br />
          <span>
            제작 기간 : `22.09.22 ~ 10.10{" "}
            <a
              href="https://github.com/SonMinSeock/spark_app"
              className={classes["git-icon"]}
            >
              <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972215/noticon/vgvbhxae6jrvqpcnu0vb.png" />
            </a>
          </span>
        </div>
        <div>
          <div className={classes["work__img"]}>
            <img src={dmImg} />
          </div>
          <span>프로젝트 이름 : 질병 예측 시스템</span>
          <br />
          <span>
            제작 기간 : `22.06.22 ~ 06.24{" "}
            <a
              href="https://github.com/SonMinSeock/spark_app"
              className={classes["git-icon"]}
            >
              <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972215/noticon/vgvbhxae6jrvqpcnu0vb.png" />
            </a>
          </span>
        </div>
      </section>
      <footer id="contacts">
        <h3>CONTACTS</h3>
        <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606895317/noticon/cffnbxeed08p0l4u44ru.png" />
        <span>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRpclZgwgmTSwmBKckDcrnnvHcDXsJzbkqMQlBGrsSLdFNGvFBXcTPGJnpHzcZkBsVdMgGv">
            zonins3@gmail.com
          </a>
        </span>
        <br />
        <span>
          <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972215/noticon/vgvbhxae6jrvqpcnu0vb.png" />
          <a href="https://github.com/SonMinSeock">SonMinSeock GitHub</a>
        </span>
        <br />
        <span>
          <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581345292/noticon/hbwtrewlv2xxxyqe3qpm.png" />
          <a href="https://velog.io/@alstjr2538">alstjr2538 Velog</a>
        </span>
        <br />
        <span>
          <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566778642/noticon/kjaaizycfgz017qxvlnu.png" />
          <a href="https://toothsome-raft-e05.notion.site/FrontEnd-Developer-02eb032185a644e290fdb6f817a13693?pvs=4">
            SonMinSeock Notion
          </a>
        </span>
      </footer>
    </React.Fragment>
  );
}

export default App;
