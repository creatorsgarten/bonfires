import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';
import { StaffUpdateManyWithoutRolesInput } from '../staff/staff-update-many-without-roles.input';
import { SquadUpdateOneRequiredWithoutRolesInput } from '../squad/squad-update-one-required-without-roles.input';

@InputType()
export class RoleUpdateInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => RoleType, {nullable:true})
    type?: keyof typeof RoleType;

    @Field(() => StaffUpdateManyWithoutRolesInput, {nullable:true})
    staffs?: StaffUpdateManyWithoutRolesInput;

    @Field(() => SquadUpdateOneRequiredWithoutRolesInput, {nullable:true})
    squad?: SquadUpdateOneRequiredWithoutRolesInput;
}
