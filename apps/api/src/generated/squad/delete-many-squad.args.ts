import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SquadWhereInput } from './squad-where.input';

@ArgsType()
export class DeleteManySquadArgs {

    @Field(() => SquadWhereInput, {nullable:true})
    where?: SquadWhereInput;
}
