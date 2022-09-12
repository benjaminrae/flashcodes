import "./Favourites.css";
import { useState, useEffect } from "react";
import { db } from "../../../../services/firebase/firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import Card from "../Card/Card";

//sign in to access favourites if not authed

const Favourites = () => {
    const [querySnapshot, setQuerySnapshot] = useState<DocumentData | null>();
    const [setsData, setSetsData] = useState<any>();

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
                {setsData &&
                    setsData.map((set: any, index: number) => {
                        return (
                            <Card
                                key={index}
                                index={index}
                                coverImageUrl={set.coverImage.url}
                                title={set.title}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Favourites;
