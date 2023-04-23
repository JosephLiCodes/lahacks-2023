import QuizDisplay from "@/components/QuizDisplay"
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
const questions = ["what is the capital of poland", "i hate school", "a", "b", "c", "d"]

export default function QuizPage({ data }) {

    const response = await fetch('/api/quizquery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            paragraph: cur.original
        })
    });

    const questions = await response.json();

    const router = useRouter();
    const { uuid } = router.query;
    const [paragraphData, setParagraphData] = useState([]);
    const [paragraphs, setParagraphs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const localStorageData = localStorage.getItem('sessions');
            if (localStorageData) {
                const data = JSON.parse(localStorageData)[uuid]?.values || [];
                const paragraphs = data.map((p) => p.original);
                setParagraphs(paragraphs);
                setParagraphData(data);
            }
        };
        fetchData();
    }, [uuid]);

    // if (!paragraphData || !paragraphs) {
    //     return <div>Loading...</div>;
    // }

    return <QuizDisplay uuid={uuid} paragraphs = {paragraphs}/>;
}
