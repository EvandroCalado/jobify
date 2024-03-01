import { Form, useNavigation, useOutletContext } from "react-router-dom";
import { UserProps } from "..";
import { Input, Select } from "../../components";
import { JOB_STATUS, JOB_TYPE } from "../../utils/constants";
import * as Styled from "./AddJob.styles";

export const AddJob = () => {
  const { user } = useOutletContext() as { user: UserProps };
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Styled.Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>

        <div className="form-center">
          <Input type="text" name="position" label="position" />
          <Input type="text" name="company" label="company" />
          <Input
            type="text"
            name="jobLocation"
            label="job location"
            defaultValue={user.location}
          />

          <Select jobData={JOB_STATUS} label="job status" name="jobStatus" />
          <Select jobData={JOB_TYPE} label="job type" name="jobType" />

          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting..." : "submit"}
          </button>
        </div>
      </Form>
    </Styled.Wrapper>
  );
};
