import { useEffect, useState } from "react";
import '../styles/styles.css';
import { Props } from "../types";
import services from "../services";
import { Header } from "../components/Header/header";
import { Acumulado } from "../components/Acumulado";
import { Local } from "../components/Local";
import { Concurso } from "../Concurso";
import { Valor } from "../components/Dezenas";


export default function Principal() {
    const [concurso,setConcurso] = useState({} as Props);
    
    
    useEffect(
        function(){
        (
            async function () {
                const numero = Math.floor(Math.random() * 2533);
                const concurso: Props = await services.get(numero);
                console.log(concurso);
                setConcurso(concurso);
            }
        )()
        },
        []
    );

    return (
        <>
        <Header numero={concurso.numero} dataApuracao={concurso.dataApuracao}/>
        { concurso.acumulado && <Acumulado/>}
        <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio}></Local>
        <Valor listaDezenas={concurso.listaDezenas}/>
        <Concurso  dataProximoConcurso={concurso.dataProximoConcurso} valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso}/>
        </>
    );
}