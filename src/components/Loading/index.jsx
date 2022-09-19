import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getGitHubJWT } from "../../services/api";
import { storeDataInLocalStorage } from "../../utils";
import { Ambient, Banner } from "./style";
import { ThreeCircles } from "react-loader-spinner";

export default function Loading() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
    useEffect(() => {
      async function setGitHubConfig() {
        const code = searchParams.get("code");
        try {
          const response = await getGitHubJWT(code);
          storeDataInLocalStorage(response.data);
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        } catch (error) {
          navigate("/");
        }
      }
      setGitHubConfig();
    }, []);

  return (
    <Ambient>
      <Banner>
        <h3>
          Repo<span style={{ color: "#3F61D7" }}>Provas</span>
        </h3>
        <ThreeCircles
          height="100px"
          width="100px"
          outerCircleColor="#3F61D7"
          innerCircleColor="#6C8AE7"
          middleCircleColor="#8BA7F3"
        />
      </Banner>
    </Ambient>
  );
}
