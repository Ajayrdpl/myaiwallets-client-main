import { useEffect, useState } from "react";
import { Button5 } from "../../components/ui/Buttons";
import TextInput from "../../components/ui/TextInput";
import PageLoader from "../../components/ui/PageLoader";
import { SwalError, SwalSuccess } from "../../utils/custom-alert";
import {
  addNoticeUpdates,
  deleteNoticeUpdates,
  getNoticeUpdates,
} from "../../api/admin-api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { formatDateTime } from "../../utils/dateFunctions";
import { Button } from "primereact/button";
import TextareaField from "../../components/ui/TextareaField";

const AddNoticeUpdates = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([""]);
  const [errors, setErrors] = useState([""]);
  const [existingQuestions, setExistingQuestions] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [globalFilter, setGlobalFilter] = useState(null);

  const validateQuestion = (value) => {
    if (!value || value.trim() === "") {
      return "Question is required";
    }
    // if (value.length < 10) {
    //   return "Question must be at least 10 characters long";
    // }
    return "";
  };

  const validateAllQuestions = () => {
    const newErrors = questions.map((q) => validateQuestion(q));
    setErrors(newErrors);
    return !newErrors.some((error) => error !== "");
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);

    const newErrors = [...errors];
    newErrors[index] = validateQuestion(value);
    setErrors(newErrors);
  };

  const handleAddMore = () => {
    if (!validateAllQuestions()) {
      return;
    }
    setQuestions([...questions, ""]);
    setErrors([...errors, ""]);
  };

  const handleSubmit = async () => {
    try {
      if (!validateAllQuestions()) {
        return;
      }
      setLoading(true);
      await addNoticeUpdates({ questions });

      console.log(questions);
      setQuestions([""]);
      setErrors([""]);
      SwalSuccess.fire({
        title: "Success",
        text: "Questions submitted successfully",
        icon: "success",
        timer: 2000,
      });
      fetchExistingQuestions()
    } catch (error) {
      console.error("Error submitting questions:", error);
      SwalError.fire({
        title: "Error",
        text: error?.response?.data?.message || "Something went wrong",
        timer: 4000,
      });
    } finally {
      setLoading(false);
    }
  };
  const fetchExistingQuestions = async () => {
    try {
      setLoading(true);
      const response = await getNoticeUpdates();
      setExistingQuestions(response?.data);
    } catch (error) {
      console.error("Error submitting questions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExistingQuestions();
  }, []);
  const serialNumberTemplate = (rowData, { rowIndex }) => {
    return rowIndex + 1;
  };
  const dateTemplate = (rowData) => {
    return formatDateTime(rowData?.createdAt, "dd-MM-yyyy hh:mm:ss");
  };
  const actionTemplate = (rowData) => {
    return (
      <Button
        icon="pi pi-trash"
        onClick={() => deleteQuestion(rowData?._id)}
        className="bg-danger p-2 fs-2 rounded"
      />
    );
  };
  const deleteQuestion = async (id) => {
    try {
      setLoading(true);
      await deleteNoticeUpdates(id);
      fetchExistingQuestions();
      SwalSuccess.fire({
        title: "Success",
        text: "Question deleted successfully",
        icon: "success",
        timer: 2000,
      });
    } catch (error) {
      console.error("Error deleting question:", error);
      SwalError.fire({
        title: "Error",
        text: error?.response?.data?.message || "Something went wrong",
        timer: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="AddNoticeUpdates">
        <div className="ss-card martop">
          <div className="input-container">
            {questions.map((question, index) => (
              <TextareaField
                key={index}
                placeholder={"Enter Notice"}
                labelName={`Notice ${index + 1}`}
                value={question}
                error={errors[index]}
                type="text"
                required
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                onBlur={(e) => handleQuestionChange(index, e.target.value)}
                aria-describedby={`error-${index}`}
              />
            ))}
          </div>
          <div className="btns">
            <Button5
              className="add-more-btn bg-primary"
              onClick={handleAddMore}
              name="+ Add More"
              disabled={questions.some((q) => !q.trim())}
            />
            <Button5 onClick={handleSubmit} name={"Submit Questions"} />
          </div>
        </div>

        <div className="ss-card martop">
          <div className="head mb-5">
            <h3 className="fs-3">Live Notice</h3>
          </div>
          <div className="dataTable">
            <DataTable
              value={existingQuestions}
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25]}
              filterDisplay="row"
              globalFilter={globalFilter}
            >
              <Column
                body={serialNumberTemplate}
                headerStyle={{ width: "5%" }}
                header="S.No"
                filter
                sortable
              />
              <Column field="question" header="Question" filter sortable />
              <Column body={dateTemplate} header="Date" filter sortable />
              <Column body={actionTemplate} header="Action" />
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNoticeUpdates;
