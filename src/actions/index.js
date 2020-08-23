import { mirrorContent } from '../services';

export function launchMirror(content) {
  return async (dispatch) => {
    dispatch({
      type: "LAUNCH_MIRROR_SERVICE",
    });

    // server delay simulated
    await new Promise(r => setTimeout(r, 900));

    try {
      const mirror_content = await mirrorContent(content);

      dispatch({
        type: "GET_MIRROR_RESPONSE",
        payload: mirror_content,
      });
    } catch (err) {
      dispatch({
        type: "GET_MIRROR_RESPONSE",
        payload: err.message || "Failed to get mirror content !",
      });
    }
  };
}

export function cleanOutput() {
  return (dispatch) => {
    dispatch({
      type: "CLEAN_OUTPUT",
    });
  };
}

