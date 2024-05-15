export type Config = {
    clientID: string;
    clientSecret: string;
};
export type License = {
    id: number;
    client_id: string;
    client_secret: string;
    project_id: string;
    expiration_date: Date;
    active: boolean;
    reference: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
};
export type Usage = {
    id: number;
    license_id: string;
    product_id: string;
    started_at: Date;
    ended_at: Date;
    reference: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
};
export type Product = {
    id: number;
    name: string;
    reference: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
};
export type Service = {
    id: number;
    product_id: string;
    name: string;
    code: string;
    reference: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
};
/**
 * Customer project
 */
export type Project = {
    id: number;
    name: string;
    photo: string;
    customer_id: string;
    product_id: string;
    reference: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
};
export type Customer = {
    id: number;
    name: string;
    surname: string;
    phone: string;
    email: string;
    reference: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
};
