import React from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { launchMirror } from '../actions';

const validate = values => {
  const errors = {};

  if ( !values.content ) {
    errors.content = 'Content Required!';
  }

  return errors;
};

const Mirror = ({
  serviceLoading,
  serviceResponse,
  launchMirror
}) => {

  const formik = useFormik({
    initialValues: {
      content: '',
    },
    validate,
    onSubmit: values => {
      // console.log(JSON.stringify(values, null, 2));
      launchMirror(values.content);
      values.content = '';
    },
  });

  if (serviceLoading) {
    return (
      <div className="container">
        <div className="badge badge-warning">Simulated Delay</div>
        <h3>Loading Response ...</h3>
      </div>
    );
  }

  return (
    <div className="container">
      <br />

      {
        serviceResponse &&

        <div>
          <h3>{'Response => '}<span className="badge badge-info">{serviceResponse.input.content}</span></h3>
          <hr />
        </div>
      }

      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="content"><h3>Content To Service</h3></label>

          <input
            className="form-control"
            id="content"
            name="content"
            onChange={formik.handleChange}
            type="text"
            value={formik.values.content}
          />

          <small
            id="contentHelp"
            className="form-text text-muted">This content will be mirrored back from server.
          </small>

          {
            formik.errors.content ?
              <div className="badge badge-warning">{formik.errors.content}</div> :
              null
          }

        </div>

        <button
          className="btn btn-info"
          type="submit"
        >Submit</button>
      </form>

    </div>
  );

};

const mapState = state => ({
  serviceLoading: state.mirror.serviceLoading,
  serviceResponse: state.mirror.serviceResponse
});

const mapDispatch = {
  launchMirror
};

export default connect(
  mapState,
  mapDispatch
)(Mirror);
