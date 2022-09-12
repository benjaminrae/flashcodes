import "./Favourites.css";
import { useState, useEffect } from "react";
import { db } from "../../../../services/firebase/firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useAuth } from "../../../../contexts/AuthContext";
import Card from "../Card/Card";
import Login from "../../../Login/Login";
import Button from "../../../Button/Button";
import { useNavigate } from "react-router-dom";

//sign in to access favourites if not authed

const Favourites = () => {
    const [querySnapshot, setQuerySnapshot] = useState<DocumentData | null>();
    const [setsData, setSetsData] = useState<any>();

    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (querySnapshot) {
            return;
        }
        getQuerySnapshot();
    }, []);

    useEffect(() => {
        extractSetData();
    }, [querySnapshot]);

    const getQuerySnapshot = async () => {
        const newQuerySnapshot = await getDocs(collection(db, "sets"));
        setQuerySnapshot(newQuerySnapshot);
    };
    const extractSetData = () => {
        if (!querySnapshot) {
            return;
        }
        const newSetData: any = [];
        querySnapshot.forEach((set: any) => {
            newSetData.push(set.data());
        });
        setSetsData(newSetData);
    };

    return (
        <div className="favourites">
            <h2 className="favourites__title">Favourites:</h2>
            <div className="favourites__cards-container">
                {!currentUser && (
                    <Button
                        text={"Login to save favourites"}
                        onClick={() => {
                            navigate("/login");
                        }}
                    />
                )}
                {currentUser && <div>You haven't set any favourites yet</div>}
                {/* {setsData &&
                    setsData.map((set: any, index: number) => {
                        return (
                            <Card
                                key={index}
                                index={index}
                                coverImageUrl={set.coverImage.url}
                                title={set.title}
                            />
                        );
                    })} */}
            </div>
        </div>
    );
};

export default Favourites;
