import React from "react";
import styles from "./Footer.module.scss";
import Layout from "../Layout/Layout";
import { Logo, Subscribe } from "../../elements";
import THEME from "../../../state/theme";
import { Link } from 'react-router-dom';
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  const servicesList = state.data.services
    .map((item, index) => (
      <Link
        key={index}
        url={"/services/" + item.id}
        hoverStyle={{ color: THEME.color }}
      >
        <i className="las la-angle-right" />
        {item.title}
      </Link>
    ))
    .slice(0, 5);

  const linkList = state.data.fast_links.map((item, index) => (
    <Link key={index} url={item.url} hoverStyle={{ color: THEME.color }}>
      <i className="las la-angle-right" />
      {item.title}
    </Link>
  ));
  return (
    <Layout col="1" padding style={{ background: "#272d2e" }}>
      <div className={styles.footer}>
        <div className={styles.logo_area}>
          <Link to={"/"}>
            <Logo dark />
          </Link>
          <p>
            Copyright All right reserved.
          </p>
          {/* <div className={styles.social}>
            <i className="lab la-linkedin-in" />
            <i className="lab la-instagram" />
            <i className="lab la-facebook-f" />
            <i className="lab la-twitter" />
          </div> */}
        </div>

        {/* <div className={styles.link_area}>
          {/* <div className={styles.links}>
            <h4>Services</h4>
            {servicesList}
          </div>
          <div className={styles.links}>
            <h4>Fast Links</h4>
            {linkList}
          </div> */}
      </div>

      {/* <div className={styles.subscribe}>
        <h4>Stay updated about our latest events.</h4>
        <Subscribe />
        <p>
          Trust us, spaming is never an option for us!
          </p>
      </div> 
      </div> */}
    </Layout>
  );
};
