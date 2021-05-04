import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAnimalById } from "../../redux/thunks/animal";
import { Container } from "../../components/shared/styles/layout";
import Spinner from "../../components/shared/spinner/Spinner";
import AnimalProfile from "./components/AnimalProfile";

const Profile = ({ match }) => {
  const dispatch = useDispatch();

  const { loading, profile } = useSelector((state) => state.animal);

  useEffect(() => {
    dispatch(getAnimalById(match.params.id));
  }, [dispatch]);

  return (
    <Container>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <AnimalProfile profile={profile} />
      )}
    </Container>
  );
};

export default Profile;
