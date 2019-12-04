import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Field, Form} from 'react-final-form';
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';
import {Input, Select} from 'final-form-material-ui';
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2))
};

const ControlParams = () => {
    const classes = useStyles();
    return (
        <Form onSubmit={onSubmit}
            // initialValues={{unit: 't', total: 10, length: 1000, interval: 1, time: 10000}}
              render={({handleSubmit, form, submitting, pristine, values}) => (
                  <form onSubmit={handleSubmit}>
                      <List>
                          <FormControl className={classes.formControl}>
                              <Field
                                  name="unit"
                                  label="抽样单位"
                                  component={Select}
                              >
                                  <MenuItem value={'s'}>秒</MenuItem>
                                  <MenuItem value={'m'}>分</MenuItem>
                                  <MenuItem value={'t'}>TTI</MenuItem>
                              </Field>
                          </FormControl>
                          <FormControl className={classes.formControl}>
                              <Field
                                  name="total"
                                  component={Input}
                                  className="input"
                                  placeholder="抽样时刻TTI数"
                              />
                          </FormControl>
                          <FormControl className={classes.formControl}>
                              <Field
                                  name="length"
                                  component={Input}
                                  className="input"
                                  placeholder="TTI时长(ms)"
                              />
                          </FormControl>
                          <FormControl className={classes.formControl}>
                              <Field
                                  name="interval"
                                  component={Input}
                                  className="input"
                                  label="抽样间隔"
                                  placeholder="抽样间隔"
                              />
                          </FormControl>
                          <FormControl className={classes.formControl}>
                              <Field
                                  name="time"
                                  component={Input}
                                  className="input"
                                  placeholder="仿真总时长"
                              />
                          </FormControl>
                      </List>
                      <Button type="submit" disabled={submitting || pristine}>
                          Submit
                      </Button>
                      <Button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                      >
                          Reset
                      </Button>
                  </form>
              )}
        >
        </Form>
    );
};
export default ControlParams;
