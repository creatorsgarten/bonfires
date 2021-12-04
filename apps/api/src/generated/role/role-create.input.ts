import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';
import { StaffCreateNestedManyWithoutRolesInput } from '../staff/staff-create-nested-many-without-roles.input';
import { SquadCreateNestedOneWithoutRolesInput } from '../squad/squad-create-nested-one-without-roles.input';

@InputType()
export class RoleCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => RoleType, {nullable:false})
    type!: keyof typeof RoleType;

    @Field(() => StaffCreateNestedManyWithoutRolesInput, {nullable:true})
    staffs?: StaffCreateNestedManyWithoutRolesInput;

    @Field(() => SquadCreateNestedOneWithoutRolesInput, {nullable:false})
    squad!: SquadCreateNestedOneWithoutRolesInput;
}
