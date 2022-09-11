import "./New.css";
import { useState, useEffect } from "react";
import { db } from "../../../../services/firebase/firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import Card from "../Card/Card";

const New = () => {
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
        <div className="new">
            <h2 className="new__title">New:</h2>
            <div className="new__cards-container">
                {setsData &&
                    setsData.map((set: any, index: number) => {
                        return (
                            <Card
                                index={index}
                                coverImageUrl={set.coverImage.url}
                                title={set.title}
                            />
                            // <div className="new__card" key={index}>
                            //     <img
                            //         src={set.coverImage.url}
                            //         alt=""
                            //         className="card__cover-image"
                            //     />
                            //     <h3 className="card__title">{set.title}</h3>
                            // </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default New;
