
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class PermissionInput {
    code: string;
    name: string;
}

export class RoleInput {
    code: string;
    name: string;
    permissions: string[];
}

export class UserCreateInput {
    username: string;
    password: string;
    email: string;
    name: string;
    roleId: string;
}

export class UserUpdateInput {
    currentPassword?: string;
    newPassword?: string;
    email?: string;
    name?: string;
    roleId?: string;
}

export class UserUpdateInputByAdmin {
    newPassword?: string;
    email?: string;
    name?: string;
    roleId?: string;
}

export class LoginResponse {
    token?: string;
}

export abstract class IMutation {
    abstract createUser(input: UserCreateInput): User | Promise<User>;

    abstract login(username: string, password: string): LoginResponse | Promise<LoginResponse>;

    abstract updateUser(userId: string, input: UserUpdateInput): boolean | Promise<boolean>;

    abstract updateUserByAdmin(userId: string, input: UserUpdateInputByAdmin): boolean | Promise<boolean>;

    abstract deleteUser(userId: string): boolean | Promise<boolean>;

    abstract createPermission(input: PermissionInput): Permission | Promise<Permission>;

    abstract updatePermission(permissionId: string, input: PermissionInput): Permission | Promise<Permission>;

    abstract deletePermission(permissionId: string): boolean | Promise<boolean>;

    abstract createRole(input: RoleInput): Role | Promise<Role>;

    abstract updateRole(roleId: string, input: RoleInput): Role | Promise<Role>;

    abstract deleteRole(roleId: string): boolean | Promise<boolean>;

    abstract restoreDB(label: string): boolean | Promise<boolean>;

    abstract backupDB(label: string): boolean | Promise<boolean>;

    abstract dropDB(pass: string): boolean | Promise<boolean>;
}

export class Permission {
    _id?: string;
    code?: string;
    name?: string;
}

export abstract class IQuery {
    abstract user(id: string): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;

    abstract permissions(): Permission[] | Promise<Permission[]>;

    abstract roles(): Role[] | Promise<Role[]>;

    abstract role(roleId: string): Role | Promise<Role>;
}

export class Role {
    _id?: string;
    code?: string;
    name?: string;
    permissions?: Permission[];
}

export class User {
    _id?: string;
    username?: string;
    email?: string;
    name?: string;
    createdAt?: number;
    role?: Role;
    isActive?: boolean;
}
