import React from "react";
import styles from "./Drug.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { CardButton } from "../../ui";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {
    const featuresList = data
        .map((item, index) => (
            <article key={index}>
                <CardButton
                    to={"/blog/" + item.id}
                    btn_after="&#xf105;"
                    btn_text="Read more"
                    btn_round
                    animation="slide-right"
                    padding
                >
                    <div className={styles.features}>
                        <img src={item.icon} alt="features_icon" />
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                </CardButton>
            </article>
        ))
        .slice(0, 3);
    return (
        <Layout
            style={{
                background: "rgb(240,240,240)",
            }}
            col="3"
            padding
        >
            <div className="layout-header">
                <span className="subtitle" style={{ color: THEME.color, fontSize: '3rem' }}>
                    Medicine Suppliers in Dhar
        </span>
                {/* <h2>Check our strong sides and see how we work.</h2>
        <p>
          Energistically predominate high-payoff alignments whereas maintainable
          materials timely deliverables. Synergistically leverage other's
          holistic mindshare via high-payoff expertise.
        </p> */}
                <div className={styles.tables}>
                    <table width="100%" border="1">
                        <tr style={{ borderColor: THEME.color }}>
                            <td>
                                <h2>ID</h2>
                            </td>
                            <td>
                                <h2>Supplier Name</h2>
                            </td>
                            <td>
                                <h2>Contact Number</h2>
                            </td>
                            <td>
                                <h2>Address Number</h2>
                            </td>
                            <td>
                                <h2>Drug description</h2>
                            </td>
                        </tr>
                        <tr style={{ borderColor: THEME.color }}>
                            <td>
                                <h3>1</h3>
                            </td>
                            <td>
                                <h3>Shailesh Sharma</h3>
                            </td>
                            <td>
                                <h3>1245457845</h3>
                            </td>
                            <td>
                                <h3>Ghora Chopati</h3>
                            </td>
                            <td>
                                <h3>12 cylender are available.</h3>
                            </td>
                        </tr>
                        <tr style={{ borderColor: THEME.color }}>
                            <td>
                                <h3>2</h3>
                            </td>
                            <td>
                                <h3>Shailesh Sharma</h3>
                            </td>
                            <td>
                                <h3>1245457845</h3>
                            </td>
                            <td>
                                <h3>Ghora Chopati</h3>
                            </td>
                            <td>
                                <h3>12 cylender are available.</h3>
                            </td>
                        </tr>
                        <tr style={{ borderColor: THEME.color }}>
                            <td>
                                <h3>3</h3>
                            </td>
                            <td>
                                <h3>Shailesh Sharma</h3>
                            </td>
                            <td>
                                <h3>1245457845</h3>
                            </td>
                            <td>
                                <h3>Ghora Chopati</h3>
                            </td>
                            <td>
                                <h3>12 cylender are available.</h3>
                            </td>
                        </tr>
                        <tr style={{ borderColor: THEME.color }}>
                            <td>
                                <h3>4</h3>
                            </td>
                            <td>
                                <h3>Shailesh Sharma</h3>
                            </td>
                            <td>
                                <h3>1245457845</h3>
                            </td>
                            <td>
                                <h3>Ghora Chopati</h3>
                            </td>
                            <td>
                                <h3>12 cylender are available.</h3>
                            </td>
                        </tr>
                        <tr style={{ borderColor: THEME.color }}>
                            <td>
                                <h3>5</h3>
                            </td>
                            <td>
                                <h3>Shailesh Sharma</h3>
                            </td>
                            <td>
                                <h3>1245457845</h3>
                            </td>
                            <td>
                                <h3>Ghora Chopati</h3>
                            </td>
                            <td>
                                <h3>12 cylender are available.</h3>
                            </td>
                        </tr>
                        <tr style={{ borderColor: THEME.color }}>
                            <td>
                                <h3>6</h3>
                            </td>
                            <td>
                                <h3>Shailesh Sharma</h3>
                            </td>
                            <td>
                                <h3>1245457845</h3>
                            </td>
                            <td>
                                <h3>Ghora Chopati</h3>
                            </td>
                            <td>
                                <h3>12 cylender are available.</h3>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>


        </Layout>
    );
};
