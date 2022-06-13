import { useParams } from "react-router-dom";

function HospitalPage() {
  const { id } = useParams();

  return <h1>병원상세페이지 {id} 병원</h1>;
}

export default HospitalPage;
