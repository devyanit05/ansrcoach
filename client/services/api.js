import axios from "axios";
const apiBaseUrl = "http://89.116.230.182:7000/";

const postApi = async (url, bodyParams = {}) => {
  try {
    const res = await fetch(apiBaseUrl + url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      mode: "cors",
      credentials: "include",
      withCredentials: true,
      body: JSON.stringify(bodyParams),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

const getApi = async (url) => {
  try {
    const res = await fetch(apiBaseUrl + url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
      mode: "cors",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const getblogs = async () => {
  try {
    let response = await axios.get(`http://89.116.230.182:7000/blogs/getblogs`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("error while calling getblogs", error.message);
  }
};

export const getblogsId = (blogsId) => {
  return getApi(`blogs/${blogsId}`);
};

export const getblogId = async (blogsId) => {
  try {
    await axios.post(
      `http://89.116.230.182:7000/blogs/feature/blogs${blogsId}`
    );
  } catch (error) {
    console.log("Error while calling ContactApi API ", error);
  }
};

export const ContactApi = async (data) => {
  try {
    await axios.post(`http://89.116.230.182:7000/contact/postcontact`, data);
  } catch (error) {
    console.log("Error while calling ContactApi API ", error);
  }
};

export const registerCreate = (courseType) => {
  return postApi("register/create", { courseType });
};

export const registerAddDetailpersonal = (
  id,
  name,
  mobile,
  sClass,
  sub,
  email
) => {
  return postApi("register/addpersonal", {
    id,
    name,
    mobile,
    sClass,
    sub,
    email,
  });
};
export const registerAddDetailcohurt = (
  id,
  name,
  mobile,
  sClass,
  board,
  email
) => {
  return postApi("register/add", { id, name, mobile, sClass, board, email });
};

export const registerResendOtp = (id) => {
  return postApi("register/otp/resend", { id });
};

export const signup = (registerationId, otp, selectedCourse) => {
  return postApi("user/signup/local", { registerationId, otp, selectedCourse });
};

export const loginInit = (mobile) => {
  return postApi("user/login/local/init", { mobile });
};

export const login = (mobile, otp) => {
  return postApi("user/login/local", { mobile, otp });
};

export const getCourse = (courseId) => {
  return getApi(`course/${courseId}`);
};

export const getCourseDemoClass = (courseId) => {
  return getApi(`course/price/demo/course/${courseId}`);
};

export const getCourseLiveClass = (courseId) => {
  return getApi(`course/price/live/course/${courseId}`);
};

export const getCourseFeatures = (courseId) => {
  return getApi(`course/feature/course/${courseId}`);
};

export const getCourseSyllabus = (courseId) => {
  return getApi(`course/syllabus/course/${courseId}`);
};

export const getCohort = (sClass) => {
  return getApi(`cohort/${sClass}`);
};

export const getCohortSubjects = (courseId) => {
  return getApi(`cohort/subject/course/${courseId}`);
};

export const getCohortTopicsByCourse = (courseId) => {
  return getApi(`cohort/topic/course/${courseId}`);
};

export const getCohortFAQs = (courseId) => {
  return getApi(`cohort/faq/course/${courseId}`);
};
