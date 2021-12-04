import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SquadUpdateInput } from './squad-update.input';
import { SquadWhereUniqueInput } from './squad-where-unique.input';

@ArgsType()
export class UpdateOneSquadArgs {

    @Field(() => SquadUpdateInput, {nullable:false})
    data!: SquadUpdateInput;

    @Field(() => SquadWhereUniqueInput, {nullable:false})
    where!: SquadWhereUniqueInput;
}
