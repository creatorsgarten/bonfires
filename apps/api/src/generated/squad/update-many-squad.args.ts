import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SquadUpdateManyMutationInput } from './squad-update-many-mutation.input';
import { SquadWhereInput } from './squad-where.input';

@ArgsType()
export class UpdateManySquadArgs {

    @Field(() => SquadUpdateManyMutationInput, {nullable:false})
    data!: SquadUpdateManyMutationInput;

    @Field(() => SquadWhereInput, {nullable:true})
    where?: SquadWhereInput;
}
