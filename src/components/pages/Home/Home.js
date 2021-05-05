import React, { Fragment } from "react";
import {
  Slider,
  Box,
} from "../../widgets";
import { Header } from '../../layouts';
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header data={state.data.menu} />
      <Slider data={state.data.posts} />
      <Box />
    </Fragment>
  );
};
