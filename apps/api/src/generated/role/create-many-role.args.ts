import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleCreateManyInput } from './role-create-many.input';

@ArgsType()
export class CreateManyRoleArgs {

    @Field(() => [RoleCreateManyInput], {nullable:false})
    data!: Array<RoleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
