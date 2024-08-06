export type Role = 'ADMIN' | 'EMPLEADO' | 'CLIENTE';

export interface UserI {
    id: number;
    user: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface LoginI {
    user: string;
    password: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }


  export interface UsuariosI {
    success: boolean;
    data:    Data[];
}

export interface Data {
    id:        number;
    user:      string;
    role:      string;
    createdAt: Date;
    updatedAt: Date;
}





