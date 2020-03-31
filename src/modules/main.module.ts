import { Module } from '@nestjs/common'
import { PermissionResolvers } from './permission/permission.resolver'
import { RoleResolvers } from './role/role.resolver'
import { UserResolvers } from './user/user.resolver'
import { UtilsResolvers } from './utils/utils.resolver'

@Module({
  providers: [PermissionResolvers, RoleResolvers, UserResolvers, UtilsResolvers]
})
export class MainModule {}
