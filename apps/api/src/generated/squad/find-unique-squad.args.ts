import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SquadWhereUniqueInput } from './squad-where-unique.input';

@ArgsType()
export class FindUniqueSquadArgs {

    @Field(() => SquadWhereUniqueInput, {nullable:false})
    where!: SquadWhereUniqueInput;
}
