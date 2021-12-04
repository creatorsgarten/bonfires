import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateManySquadInput } from './role-create-many-squad.input';

@InputType()
export class RoleCreateManySquadInputEnvelope {

    @Field(() => [RoleCreateManySquadInput], {nullable:false})
    data!: Array<RoleCreateManySquadInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
