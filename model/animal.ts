export interface I_Animal {
    id: string;
    nome: string;
    tipoAnimal: E_AnimalType | string; /* TODO: Remover tipo string. */
    statusAnimal: E_AnimalStatus;
    localizacao: string;
    dataNascimento: string;
    entradaPlantel: string;
    pesoCompra: number;
    raca: string;
    codigoRastreamento: string;
    faseProducao: {
        sigla: string;
        descricao: string;
    };
    tipoGranja: {
        sigla: string;
        descricao: string;
    };
}

export enum E_AnimalType {
    POULTRY = 'POULTRY',
    SWINE = 'SWINE'
}

export enum E_AnimalStatus {
    ACTIVE = 0,
    INACTIVE = 1,
    SOLD = 2,
    DISPOSED = 3
}

export enum E_AnimalStatus_Title {
    'Ativo' = E_AnimalStatus.ACTIVE,
    'Inativo' = E_AnimalStatus.INACTIVE,
    'Vendido' = E_AnimalStatus.SOLD,
    'Descartado' = E_AnimalStatus.DISPOSED
}
