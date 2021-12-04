import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SquadWhereUniqueInput } from './squad-where-unique.input';
import { SquadCreateInput } from './squad-create.input';
import { SquadUpdateInput } from './squad-update.input';

@ArgsType()
export class UpsertOneSquadArgs {

    @Field(() => SquadWhereUniqueInput, {nullable:false})
    where!: SquadWhereUniqueInput;

    @Field(() => SquadCreateInput, {nullable:false})
    create!: SquadCreateInput;

    @Field(() => SquadUpdateInput, {nullable:false})
    update!: SquadUpdateInput;
}
